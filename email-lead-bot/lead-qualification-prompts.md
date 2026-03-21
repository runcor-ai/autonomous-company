# Lead Qualification AI Prompts

## Master Lead Scoring Prompt

```
You are an expert lead qualification specialist. Analyze the following email and score the lead from 1-10 based on these criteria:

SCORING CRITERIA:
- Budget Authority (0-3 points): Can they make purchasing decisions?
- Need Urgency (0-2 points): How urgent is their problem?
- Company Fit (0-2 points): Are they our ideal customer profile?
- Timeline (0-2 points): When do they need a solution?
- Contact Quality (0-1 point): Is this a decision maker?

EMAIL TO ANALYZE: {email_content}

RESPOND WITH:
- Score: X/10
- Category: HOT (8-10), WARM (5-7), COLD (1-4)
- Reasoning: Brief explanation
- Next Action: Recommended follow-up
- Route To: Sales/Marketing/Support
```

## Industry-Specific Prompts

### SaaS/Tech Companies
```
Analyze this lead for a SaaS product. Focus on:
- Company size and growth stage
- Current tech stack gaps
- Budget range indicators
- Implementation timeline
- Technical decision makers

{email_content}

Score and categorize with SaaS-specific insights.
```

### Consulting/Services
```
Evaluate this consulting inquiry based on:
- Project scope and complexity
- Budget signals and urgency
- Client maturity and readiness
- Decision-making process
- Potential project value

{email_content}

Provide consultant-focused qualification score.
```

### E-commerce/Retail
```
Assess this retail/e-commerce lead focusing on:
- Store size and revenue indicators
- Marketing spend capacity
- Seasonal timing needs
- Competition pressure
- Growth goals mentioned

{email_content}

Score with e-commerce qualification criteria.
```

## Follow-up Response Templates

### HOT Lead Auto-Response
```
Thank you for reaching out! Based on your inquiry, I can see this is a priority for your team.

I'm connecting you directly with [SALES_REP_NAME] who specializes in [RELEVANT_AREA]. They'll reach out within 2 hours to schedule a brief call.

In the meantime, here's a quick case study of how we helped [SIMILAR_COMPANY]: [LINK]

Best regards,
AI Lead Qualification System
```

### WARM Lead Nurture
```
Thanks for your interest! I've reviewed your requirements and believe we can definitely help.

Based on your timeline, I'm scheduling you for our weekly demo on [DAY] at [TIME]. You'll see exactly how we solve [SPECIFIC_PROBLEM_MENTIONED].

I'm also sending you our [RELEVANT_RESOURCE] guide that addresses your [SPECIFIC_CONCERN].

Would this timing work for you?

Best,
[TEAM_NAME]
```

### COLD Lead Education
```
Thank you for reaching out! 

Based on your inquiry, you might find value in our free resource: [EDUCATIONAL_CONTENT]. It covers [RELEVANT_TOPIC] which seems relevant to your situation.

I'm also adding you to our weekly newsletter where we share insights about [INDUSTRY_TOPIC]. Feel free to reach out when [TIMING_CONDITION].

Best regards,
[COMPANY_NAME]
```

## Integration Code Examples

### Zapier Integration
```
Trigger: New Gmail/Email
Action: Send to AI API with qualification prompt
Condition: If score >= 8, notify sales team
Else: Add to nurture campaign
```

### Python Script Example
```python
def qualify_lead(email_content):
    prompt = get_qualification_prompt(email_content)
    response = openai_client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return parse_lead_score(response.choices[0].message.content)
```
