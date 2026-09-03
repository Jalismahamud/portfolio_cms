<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactSubmissionRequest;
use App\Mail\ContactFormSubmitted;
use App\Models\ContactSubmission;
use App\Models\Profile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(StoreContactSubmissionRequest $request): RedirectResponse
    {
        $submission = ContactSubmission::create($request->validated());

        $notifyEmail = Profile::query()->value('email') ?? config('mail.from.address');

        if ($notifyEmail) {
            Mail::to($notifyEmail)->queue(new ContactFormSubmitted($submission));
        }

        return back()->with('success', "Thank you for reaching out. I'll get back to you soon.");
    }
}
