import json
import random
import datetime as dt

base_name = "Person"
base_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum blandit nunc a rhoncus. Suspendisse ex lectus, interdum eu finibus vitae, consectetur sit amet purus."
base_types = (
    "subject",
    "researcher",
    "other",
)


def generate_person(id):
    name = f"{base_name}_{id}"
    ptype = random.choice(base_types)
    dob = dt.date(
        random.randrange(1940, 1990), random.randrange(1, 13), random.randrange(1, 28)
    )
    dob = dob.isoformat()
    return {
        "id": id,
        "name": name,
        "type": ptype,
        "dob": dob,
        "description": base_description,
    }


def generate_file():
    persons = []
    for i in range(1, 301):
        persons.append(generate_person(i))
    db = {"persons": persons}
    with open("db.json", "w") as f:
        json.dump(db, f)


if __name__ == "__main__":
    generate_file()
