# Swoony Matchmaking Platform

## Project Overview

Swoony is a premium matchmaking application that positions itself as "Headhunter for Love" - an anti-Tinder solution solving dating fatigue. Unlike traditional swipe-based dating apps, Swoony is a results-oriented matchmaking service operating through a mobile application with human matchmakers assisted by AI.

**Tagline:** "Stop swiping, start dating"

## Core Concept

**Problem:** Dating Fatigue - the exhaustion from endless swiping and superficial connections

**Solution:** Professional matchmaking service that sells results and saved time, not just database access

**Key Differentiator:** Quality over quantity, human-curated matches with AI assistance

## Business Model: AI-Powered Subscriptions + VIP Human Service

### Subscription Tiers (AI Matchmaker)

| Tier | Price | Matches | Features |
|------|-------|---------|----------|
| **Ilmainen** | €0 | 1/month | AI-matchmaking, basic profile |
| **Swoony+** | €14.99/kk | 4/month | Priority queue, premium support |
| **Swoony Pro** | €29.99/kk | 8/month | VIP priority, profile feedback |

- **How it works:** AI Matchmaker analyzes all candidates and delivers matches automatically
- **Credit deduction:** Only after BOTH users accept the match
- **Women-first model:** Woman sees suggestion first, man only sees if she accepts

### Swoony VIP - Human Matchmaker (€499 one-time)

- **Promise:** "Matchmaker etsii puolestasi"
- **What's included:**
  - 30min personal interview
  - Profile feedback and improvements
  - 5 hand-picked suggestions (not AI)
- **Guarantee:** "Vähintään 2 keskustelua tai etsimme jopa 8 ehdokasta puolestasi"
- **Target:** Users who tried AI, want more personal touch
- **Positioning:** "Hidden gems AI would miss"

## Key Metrics & Validation

- **Customer LTV:** $63 (industry average is $15-20)
- **Premium conversion:** ~8% choose the highest-priced product
- **Market position:** Competing on quality, not price

## Platform Architecture

### Tech Stack
- **Frontend:** Next.js web application
- **Backend:** Supabase (PostgreSQL database + Edge Functions)
- **AI Integration:** OpenRouter (Google Gemini 3 Flash)
- **Notifications:** Push notifications + email

### User Types
1. **Regular Users** - Seeking romantic matches
2. **Matchers** - Human matchmakers with access to matchmaking tools

## Matchmaking Workflow

### Phase 1: User Onboarding
Users complete comprehensive questionnaire:
- **Group 1:** Physical appearance & lifestyle (21 questions)
- **Group 2:** Partner preferences (18 questions)
- **Group 4:** Relationship history & skills (7 questions)
- **Group 5:** Sexuality & intimacy (2 questions)
- **Total:** 70+ questions + photos + intro video

### Phase 2: Possible Matches Calculation
**Edge Function:** `app/api/possible-matches/route.ts`

Filters based on:
- Gender and interest compatibility
- Age range (min_age, max_age)
- Geographic distance (max_distance)
- Both users have remaining matches (matches_left > 0)

### Phase 3: Matcher Assignment
**Location:** `app/profiles/page.tsx`

- Matchers browse Active Clients (users with match packages)
- Matcher claims/assigns profile when starting analysis by setting `matcher_id`
- User receives notification: "Your profile is being processed"
- One matcher per user at a time

### Phase 4: AI-Powered Match Analysis
**Primary API:** `app/api/top-matches/route.ts`

**AI Analysis (Google Gemini 3 Flash):**
- Fetches all user answers from database
- Builds structured SwoonyProfile with 5 groups of data
- Analyzes compatibility using:
  - **Critical filters:** kids, smoking, alcohol, pets, allergies
  - **Psychological compatibility:** conflict resolution, intimacy needs, values
  - **Lifestyle compatibility:** exercise, religion, education

**Returns:**
- **Top 3 matches** with compatibility score (0-100%)
- Finnish summary of compatibility
- Green flags (strengths)
- Red flags (potential issues)
- Filter status breakdown

### Phase 5: Match Creation
**Component:** `app/profiles/[id]/components/MatchMaker.tsx`

**Process:**
1. AI presents top 3 candidates to matcher
2. Matcher chooses which candidate to match
3. Compares answers side-by-side
4. Writes match description explaining compatibility
5. Creates match with initial status: `pending_woman`
6. Records in `matcher_matches` table
7. Sends push notification to female user

### User Notifications Flow
1. **Mätsiehdotus** - Match suggestion notification sent
2. **Reminders** - If no accept/decline action taken
3. **Mätsi syntyi** - When both users have accepted

## Match Lifecycle

### Status Flow
```
pending_woman → pending_man → approved
               ↓              ↓
          declined_woman  declined_man
```

**Status Definitions:**
- `pending_woman` - Female user needs to approve/decline
- `pending_man` - Male user needs to approve/decline
- `approved` - Both approved, in-app chat opens
- `declined_woman` - Female user declined
- `declined_man` - Male user declined

### Match Credit Rules
- **Credit deducted:** Only after BOTH users accept
- **If both have match packages:** Credit deducted from both
- **If only one has package:** Credit deducted only from package holder
- **Woman declines:** No credit impact
- **Man declines (after woman accepted):** No credit impact
- **Pending expiration:** If no accept/decline within 1 week, match expires

### "Women First" Safety Model
1. Match presented to female user first
2. Only if she approves, shown to male user
3. Both must approve before chat opens

**Benefits:**
- Women feel safe (no spam)
- Men experience less rejection (only see interested women)

### After Match Approval
- In-app chat becomes available immediately
- Users can unmatch after approval if needed
- Previous matches remain but only active match shown on frontpage

## Database Schema

### Core Tables
- **profiles** - User data, questionnaire answers, matcher_id
- **matches** - Match pairs, status, descriptions, active flag
- **matcher_matches** - Matcher statistics
- **answers** - Questionnaire responses
- **questions** - Questionnaire structure

## Key API Routes

- `/api/top-matches` - AI compatibility analysis (up to 20 candidates)
- `/api/possible-matches` - Calls Supabase Edge Function for filtering
- `/api/match-analyzer` - Detailed 1-on-1 comparison (currently unused)

## State Management (Zustand)

- **useUserStore** - Current matcher user, all users
- **useMatchStore** - All matches
- **useMatcherStore** - Matcher-specific data

## Custom Hooks

- **useUsersWithImages** - Fetches all users with images
- **usePossibleMatches** - Gets filtered possible matches for a user
- **useTopMatches** - Calls AI analysis (cached for 10 minutes)
- **useMatches** - Fetches all matches

## Current Challenges & Solutions

### Challenge: Waiting Anxiety
**Problem:** Process takes 2-4 weeks, users pay €50 and see dark screen, may think nothing is happening

**Solution (Q1 2026):** Visual "Status Timeline"
- Shows real-time progress: "Matchmaker reviewed 14 profiles for you today..."
- Transforms waiting from anxiety into premium experience

## 2026 Roadmap

### AI Transition
- Moving from manual matchmaking to AI-powered system
- AI handles heavy "filtering work"
- Human role shifts to quality assurance and VIP clients (€2000+ packages)

### Geographic Strategy
- **Current focus:** Fill Helsinki registry first
- **Principle:** City by city, not "whole country"
- Matchmaking requires critical mass to function

### International Expansion
- **Next target:** Stockholm (Q4 2026)
- Purchasing power and status-seeking culture fit Swoony brand

## Quality Control

### Profile Requirements
- No incomplete profiles accepted
- 100% completion required: images, video, all questions
- Expert review before becoming matchable

### Matcher Tools
- Add notes to user profiles
- Set user status (active, paused, etc.)
- View recent matches and outcomes
- Side-by-side user comparison before matching

### Feedback Loop
- Users provide post-match feedback
- Ratings tracked per matcher
- Decline reasons recorded for improvement

## Subscription & Match Limits

### Who Can Be Matched
- **Active Clients:** Need match package (credits) + 100% complete profile
- **Passive Members:** Need subscription + 100% complete profile (no credits needed to receive matches)

### Database Fields
- `matches_left` - Remaining match credits
- `matches_purchased` - Total credits purchased
- `subscription_status: 'active'` - Passive member with active subscription
- `pro_fastline` - Flag for expedited processing

### Matchability Rules
- Active Clients initiate matchmaking (mätsipaketti holders)
- Passive Members can only BE matched to, not initiate
- Both types require 100% profile completion

## Target Audience

- Age: 25-60 years old
- Serious about finding love
- Tired of "disposable dating"
- Values safety and thoroughness
- Willing to pay for quality results

## Brand Positioning

**Values:**
- Professional expertise
- Quality over quantity
- Safety and thoroughness
- Time-saving
- Results-oriented

**Anti-values:**
- Casual swiping
- Superficial connections
- Endless browsing
- Algorithm-only matching

## Website (swoony.io)

**Purpose:** Single landing page to drive app downloads

**Key Sections:**
1. **Hero:** "Finland's best matchmaking app"
2. **Value Proposition:** Save time, Quality > Quantity, Professional selection
3. **How It Works:** 4-step process
4. **Target Audience:** Who Swoony is for
5. **Testimonials:** Build trust
6. **FAQ & Blog:** Security, guarantees, success stories
7. **CTA:** Download now (App Store / Google Play)

**Contact:** info@swoony.io
**Social:** Instagram @swoonyapp

## Development Phase

**Current Status:** Commercialization scaling & AI transition
**Updated:** January 2026
**Stage:** Product validated (people are paying), now scaling user base

## Key Success Factors

1. **Validated Business Model:** Two-tier system solves chicken-egg problem
2. **High LTV:** $63 vs industry $15-20
3. **Quality Focus:** Complete profiles, human review, women-first model
4. **AI Integration:** Smart filtering while maintaining human touch
5. **Geographic Focus:** City-by-city dominance, not broad coverage

## Notes for Developers

- Finnish language primary (business context in Finnish, platform docs in English)
- Next.js + Supabase stack
- AI prompts emphasize honesty over inflated scores
- Question pattern matching maps answers to profile fields
- 10-minute cache on AI analysis calls
- Push notifications critical for user engagement
- Match credits deducted only after both users accept
- Pending matches expire after 1 week without response
