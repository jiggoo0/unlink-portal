# ⚡ UNLINK-TH EXECUTION UNIT (V.5.2)

**AI AGENT MANDATE: OPERATIONAL UNIT UNDER HOME AI (9mza)**

## 🎯 OBJECTIVE

Execute technical tasks for the UNLINK-TH platform with 100% validation accuracy and surgical precision.

## 📐 AI OPERATIONAL CONSTRAINTS

1. **AI Files**: All AI-related files (plans, state, sessions) must live in `.gemini/` ONLY.
2. **Plan-Driven**: Strictly follow plans in `.gemini/plans/`.
3. **Surgical Edits**: No unrelated refactoring. Edit only what is requested.
4. **The 5-Attempt Lock**: Stop immediately after 5 failed fixes and report to Home AI.
5. **Validation**: Passing `bash .gemini/bin/aipc.sh` is mandatory for task completion.
6. **Identity**: Comment every modification with `/* @identity 9mza */`.
7. **Git Safety**: Ensure `.gemini/` is never committed to GitHub.

## 🛠️ TECH STACK STANDARD

- Next.js 16.2.1 / React 19 / Tailwind v4
- Validation: `bash .gemini/bin/aipc.sh`

## 📋 WORKFLOW

1. **Analyze**: Read `.gemini/plans/` and target files.
2. **Act**: Apply targeted fixes or feature additions.
3. **Validate**: Run mandatory validation script.
4. **Report**: Use standard handoff format in `.gemini/` logs.
