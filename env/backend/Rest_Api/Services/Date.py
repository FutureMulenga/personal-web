from datetime import datetime


def get_current_date():
    """Get the current time."""
    current_date = datetime.now().strftime("%d-%m-%Y")
    return current_date