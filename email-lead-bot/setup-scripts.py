# Email Lead Qualification Bot - Setup Scripts
# Ready-to-use integration code

import json
import openai
from datetime import datetime

# Lead Qualification System
class LeadQualifier:
    def __init__(self, api_key):
        self.client = openai.OpenAI(api_key=api_key)
        
    def score_lead(self, email_content, sender_email, subject):
        """Score lead from 1-10 based on qualification criteria"""
        
        prompt = f"""
        Score this lead from 1-10 based on these criteria:
        - Budget indicators (1-3 points)
        - Timeline urgency (1-2 points) 
        - Company size indicators (1-3 points)
        - Decision maker role (1-2 points)

        Email: {email_content}
        From: {sender_email}
        Subject: {subject}
        
        Return only the score and brief reason.
        """
        
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        
        return response.choices[0].message.content

    def route_lead(self, score, lead_data):
        """Route lead based on score"""
        if score >= 8:
            return "sales-urgent"
        elif score >= 5:
            return "marketing-nurture" 
        else:
            return "content-education"

# Gmail Integration Example
def process_gmail_leads():
    """Process new Gmail leads automatically"""
    # Gmail API setup code here
    # This integrates with Gmail API to fetch new emails
    # and process them through the lead qualifier
    pass

# Webhook handler for Zapier/Make integration
def handle_webhook(request):
    """Handle incoming lead from webhook"""
    lead_data = json.loads(request.body)
    qualifier = LeadQualifier("your-api-key-here")
    
    score = qualifier.score_lead(
        lead_data['email_body'],
        lead_data['sender_email'], 
        lead_data['subject']
    )
    
    routing = qualifier.route_lead(score, lead_data)
    
    return {
        'score': score,
        'routing': routing,
        'processed_at': datetime.now().isoformat()
    }

# Configuration template
CONFIG = {
    "scoring_weights": {
        "budget_indicators": ["budget", "investment", "$", "cost"],
        "urgency_keywords": ["asap", "urgent", "immediately", "quickly"],
        "company_size": ["enterprise", "corporation", "team of", "employees"],
        "decision_maker": ["ceo", "director", "manager", "founder"]
    },
    "routing_rules": {
        "high_priority": {"score_min": 8, "notify": "sales@company.com"},
        "medium_priority": {"score_min": 5, "notify": "marketing@company.com"},
        "low_priority": {"score_min": 1, "notify": "content@company.com"}
    }
}
