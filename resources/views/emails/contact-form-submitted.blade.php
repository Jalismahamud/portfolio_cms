@component('mail::message')
# New Contact Form Submission

You've received a new message from your portfolio contact form.

**Name:** {{ $submission->name }}
**Email:** {{ $submission->email }}
**Subject:** {{ $submission->subject }}

**Message:**

{{ $submission->message }}

@component('mail::button', ['url' => 'mailto:'.$submission->email])
Reply to {{ $submission->name }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
