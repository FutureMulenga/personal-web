from datetime import datetime

def calculate_age(birth_year):
    """Calculate the age based on the birth year."""
    current_year = datetime.now().year
    age = current_year - birth_year
    return age
     