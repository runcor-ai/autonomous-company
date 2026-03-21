# Email Lead Qualification Bot - Implementation Guide

## Overview
This bot automatically scores incoming leads from 1-10 and routes them to appropriate team members based on qualification criteria.

## Step-by-Step Setup

### 1. Email Platform Integration

#### Gmail Setup
1. Enable Gmail API in Google Cloud Console
2. Create service account and download JSON key
3. Use provided Python script: `gmail_integration.py`
4. Install dependencies: `pip install google-api-python-client`

#### Outlook/Office 365 Setup
1. Register app in Microsoft Azure portal
2. Get client ID and secret
3. Use provided script: `outlook_integration.py` 
4. Install dependencies: `pip install msal requests`

#### Zapier Integration (No-Code Option)
1. Create new Zap: Gmail/Outlook → Webhook → Slack/Email
2. Use webhook URL from provided integration templates
3. No coding required - 5 minute setup

### 2. Lead Scoring Configuration

Default scoring criteria (customize as needed):
- Company size (1-3 points)
- Budget mentioned (1-2 points) 
- Timeline urgency (1-2 points)
- Decision maker role (1-3 points)

### 3. AI Integration
Works with any AI API:
- OpenAI GPT-4/3.5
- Anthropic Claude
- Google Gemini
- Local models via Ollama

### 4. Routing Rules
- Score 8-10: Immediate sales team notification
- Score 5-7: Marketing nurture sequence
- Score 1-4: Educational content series

### 5. Testing
Use provided sample emails to test scoring accuracy before going live.

## Support
Questions? Check troubleshooting guide or contact support.
