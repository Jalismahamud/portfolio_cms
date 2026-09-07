<?php

use App\Mail\ContactFormSubmitted;
use App\Models\ContactSubmission;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;

it('stores a valid contact submission and queues a notification', function () {
    Mail::fake();

    $response = $this->post(route('contact.store'), [
        'name' => 'Jane Client',
        'email' => 'jane@example.com',
        'company' => 'Acme Inc.',
        'inquiry_type' => 'Web Application',
        'budget_range' => '$1,000 - $3,000',
        'subject' => 'New product website',
        'message' => 'I need a reliable product website for our upcoming launch.',
    ]);

    $response->assertRedirect();
    $response->assertSessionHas('success');
    $this->assertDatabaseHas('contact_submissions', [
        'email' => 'jane@example.com',
        'inquiry_type' => 'Web Application',
        'budget_range' => '$1,000 - $3,000',
    ]);
    Mail::assertQueued(ContactFormSubmitted::class);
});

it('rejects invalid contact metadata and honeypot submissions', function () {
    $response = $this->from('/#contact')->post(route('contact.store'), [
        'name' => 'Jane Client',
        'email' => 'jane@example.com',
        'inquiry_type' => 'Unexpected Type',
        'budget_range' => '$999',
        'subject' => 'New product website',
        'message' => 'I need a reliable product website for our upcoming launch.',
        'website' => 'https://spam.example.com',
    ]);

    $response->assertRedirect('/#contact');
    $response->assertSessionHasErrors(['inquiry_type', 'budget_range', 'website']);
    $this->assertDatabaseCount('contact_submissions', 0);
});

it('throttles repeated contact submissions', function () {
    Mail::fake();
    RateLimiter::clear('127.0.0.1|repeat@example.com');

    $payload = [
        'name' => 'Jane Client',
        'email' => 'repeat@example.com',
        'subject' => 'New product website',
        'message' => 'I need a reliable product website for our upcoming launch.',
    ];

    foreach (range(1, 5) as $attempt) {
        $this->post(route('contact.store'), $payload)->assertRedirect();
    }

    $this->post(route('contact.store'), $payload)->assertTooManyRequests();
    expect(ContactSubmission::query()->count())->toBe(5);
});
