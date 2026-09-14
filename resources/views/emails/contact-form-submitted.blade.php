@component('mail::message')
# New Contact Form Submission

You've received a new message from your portfolio contact form.

**Name:** {{ $submission->name }}
**Email:** {{ $submission->email }}
@if ($submission->company)
**Company:** {{ $submission->company }}
@endif
@if ($submission->inquiry_type)
**Project type:** {{ $submission->inquiry_type }}
@endif
@if ($submission->budget_range)
**Budget:** {{ $submission->budget_range }}
@endif
**Subject:** {{ $submission->subject }}

**Message:**

{{ $submission->message }}

@component('mail::button', ['url' => 'mailto:'.$submission->email])
Reply to {{ $submission->name }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
