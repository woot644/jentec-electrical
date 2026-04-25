# 04 · Review-Request Workflow

**Goal**: take Jentech from 158 → 200+ Google reviews by Month 3 of the trial. Google review velocity (rate of new reviews) is one of the strongest signals in the local pack ranking. A review every few days, sustained over months, is what beats older businesses with stale 5★ counts.

**Mechanism**: every completed job triggers an automated SMS or email to the customer with a one-tap link to leave a Google review. ServiceM8 handles the trigger; Jentech handles only the customers who reply with a question.

---

## ServiceM8 setup

ServiceM8 has built-in support for both job-completion automations and review-request templates. Path:

1. **ServiceM8 → Settings → Automation → New Automation**
2. **Trigger**: *"When a job's status changes to Completed"*
3. **Delay**: 4 hours after completion (long enough for the customer to be back at home / their office, short enough that the job is fresh)
4. **Action**: Send SMS + Email
5. **Condition (optional)**: only if the job total is > $100 (skip tiny callbacks where the customer might not feel they have enough to say)

ServiceM8 reference: https://help.servicem8.com/article/189-automations

---

## SMS template (160 chars or under)

> Hi [FirstName], thanks for choosing Jentech today. If you've got a minute, we'd love a quick Google review: g.page/r/Cf...write/review — Andrew @ Jentech

Test the short link with Google's "Write a review" link generator on the GBP dashboard. The format is `g.page/r/<id>/review` and points straight to the review form, no extra clicks.

## Email template

> **Subject**: Quick favour, [FirstName]?
>
> Hi [FirstName],
>
> Just wanted to thank you for the work today. The team mentioned you were good to deal with — that always makes our day.
>
> If you've got a minute, would you mind leaving us a quick Google review? It's the single biggest thing that helps a small Brisbane electrician compete against the franchise mobs. Even one line means a lot.
>
> Direct link: https://g.page/r/[GBP-REVIEW-ID]/review
>
> If anything wasn't quite right today, please let me know directly — I'd rather hear from you first than read about it.
>
> Cheers,
> Andrew Gibson
> Director, Jentech Electrical
> 07 3914 9696

---

## Volume math

- Jentech currently averages [X jobs/week — confirm].
- If 25% of completions leave a review (industry-realistic with prompt + soft tone): Y reviews/week.
- 12-week trial → 12Y reviews. To go 158 → 200, need 42 reviews → 3.5/week.
- That's achievable at any throughput above ~14 jobs/week.

If the rate is below that, the unlock is upping the prompt frequency, not the rate-per-prompt — i.e. text *and* email rather than one or the other; or a follow-up text 3 days later if the first didn't land.

---

## Review monitoring

- Set up Google Business Profile email notifications for new reviews (automatic — confirm Andrew or Rachel is the recipient).
- Reply to **every review**, positive and negative. Personalised, not templated. Google rewards engagement.
- Negative reviews get a same-day reply with a phone number to call — turning a complaint into a resolution publicly is a stronger signal than the original complaint is a negative.

---

## Reporting

For Month 3 trial review, capture:
- Review count at baseline (Day 0): record exact number
- Review count at Day 90
- Average rating maintained
- New review velocity (reviews/week, week-by-week chart)
- Response rate (% of reviews replied to)

These four numbers are the cleanest local-pack signal you can show as evidence the trial worked.
