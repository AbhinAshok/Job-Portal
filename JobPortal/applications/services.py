def calculate_match_score(
    candidate_skills,
    required_skills
):

    candidate_set = set(
        skill.strip().lower()
        for skill in candidate_skills.split(",")
        if skill.strip()
    )

    required_set = set(
        skill.strip().lower()
        for skill in required_skills
    )

    if not required_set:
        return 0

    matched = candidate_set.intersection(
        required_set
    )

    return round(
        (len(matched) / len(required_set)) * 100,
        2
    )