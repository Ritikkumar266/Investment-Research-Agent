# LLM Development Summary

## AI Model Used

**Model:** ChatGPT (OpenAI GPT-5.5)

This project was developed iteratively with ChatGPT. The AI was used as a development assistant for architecture planning, API integration, debugging, UI improvements, deployment, and documentation. Each development phase involved discussing implementation approaches, resolving issues, and refining the application.

---

# Session 1 – Project Planning & Architecture

### Objective

Plan the overall architecture of the AI Investment Research Agent.

### Discussion Summary

- Defined the project scope and objectives.
- Selected a React frontend with an Express.js backend.
- Chose Yahoo Finance for financial data.
- Chose GNews API for company news.
- Selected OpenRouter for AI-powered investment analysis.
- Designed the flow of data between frontend, backend, external APIs, and the LLM.

### Outcome

Established the application's architecture and technology stack before implementation.

---

# Session 2 – Backend Development

### Objective

Build backend APIs for fetching financial information and company news.

### Discussion Summary

- Implemented Express routes and controllers.
- Integrated Yahoo Finance for:
  - Company search
  - Stock prices
  - Market data
  - Historical price data
- Integrated GNews API for fetching recent company news.
- Designed service and tool layers for modular code.

### Outcome

Completed a backend capable of collecting structured financial and news data.

---

# Session 3 – AI Integration

### Objective

Generate AI-based investment recommendations.

### Discussion Summary

- Designed prompts for structured financial analysis.
- Integrated OpenRouter using the OpenAI SDK.
- Improved prompt engineering for consistent JSON output.
- Added confidence score, investment score, risk level, summary, pros, and cons.

### Outcome

Implemented an AI agent that combines financial data and recent news to produce investment recommendations.

---

# Session 4 – Frontend Development

### Objective

Create an intuitive user interface.

### Discussion Summary

- Designed reusable React components.
- Added company autocomplete search.
- Displayed financial metrics.
- Integrated stock price charts.
- Added company logos.
- Displayed latest news articles.
- Improved responsive layout and UI styling.

### Outcome

Developed a clean and interactive dashboard for investment analysis.

---

# Session 5 – Error Handling & Debugging

### Objective

Improve application reliability.

### Discussion Summary

Resolved issues including:

- API authentication
- Yahoo Finance symbol lookup
- Historical chart data
- JSON parsing
- Invalid AI responses
- Search suggestions
- GNews query formatting
- React component state management
- CORS configuration
- Environment variables

### Outcome

Improved stability and robustness of the application.

---

# Session 6 – Deployment

### Objective

Deploy the application for public access.

### Discussion Summary

- Prepared the project for production.
- Configured Render for backend deployment.
- Configured Vercel for frontend deployment.
- Managed environment variables.
- Configured CORS.
- Tested communication between frontend and backend.

### Outcome

Successfully deployed the application with separate frontend and backend hosting.

---

# Session 7 – Documentation

### Objective

Prepare project documentation.

### Discussion Summary

- Wrote the README.
- Documented setup instructions.
- Explained architecture.
- Summarized design decisions.
- Prepared deployment instructions.
- Documented example outputs.

### Outcome

Created complete documentation suitable for project evaluation.

---

# How AI Was Used

ChatGPT was used throughout development as a collaborative engineering assistant for:

- Project planning
- System architecture
- Prompt engineering
- Backend development
- Frontend development
- Debugging
- API integration
- UI improvements
- Deployment guidance
- Documentation

The AI provided implementation guidance, troubleshooting assistance, code refinement suggestions, and architectural recommendations while all implementation decisions and integration were carried out during development.

---

# Key Benefits

Using ChatGPT accelerated development by:

- Reducing debugging time.
- Improving prompt quality for AI responses.
- Suggesting modular project architecture.
- Assisting with deployment configuration.
- Improving code readability and maintainability.
- Helping resolve integration issues with external APIs.

---

# Conclusion

The project was developed iteratively with AI assistance rather than generated in a single step. ChatGPT served as a development companion throughout the software development lifecycle, from initial planning to final deployment, helping refine ideas, troubleshoot issues, and improve overall code quality.