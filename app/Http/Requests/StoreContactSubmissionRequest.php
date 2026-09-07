<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreContactSubmissionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'inquiry_type' => ['nullable', Rule::in([
                'Laravel Development',
                'Full Stack Development',
                'Web Application',
                'E-commerce Development',
                'REST API Development',
                'AI Integration',
                'ERP / Business Software',
                'Portfolio / Website',
                'General Inquiry',
                'Other',
            ])],
            'budget_range' => ['nullable', Rule::in([
                'Not Sure Yet',
                'Under $500',
                '$500 - $1,000',
                '$1,000 - $3,000',
                '$3,000+',
                "Let's Discuss",
            ])],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'min:20', 'max:5000'],
            'website' => ['nullable', 'prohibited'],
        ];
    }
}
