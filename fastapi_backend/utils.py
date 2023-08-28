def get_value_range(installment_value: float) -> str:
    if installment_value <= 1000:
        return "0 a 1000"
    elif 1000 < installment_value <= 2500:
        return "1000 a 2500"
    elif 2500 < installment_value <= 5000:
        return "2500 a 5000"
    return "5000+"

def get_debtor_profile(days: int) -> str:
    if days == 0:
        return "Nunca atrasou"
    elif days <= 5:
        return "até 5 dias"
    elif days <= 10:
        return "até 10 dias"
    elif days <= 15:
        return "até 15 dias"
    return "já atrasou mais de 15 dias"

def get_payment_conditions(installment_value: float,
                           late_payment_days: int) -> dict[str, int]:
    agreement_mapping = {
        ("0 a 1000", "Nunca atrasou"): {"entrada": 5, "parcelamento": 4},
        ("0 a 1000", "até 5 dias"): {"entrada": 10, "parcelamento": 3},
        ("0 a 1000", "até 10 dias"): {"entrada": 15, "parcelamento": 2},
        ("0 a 1000", "até 15 dias"): {"entrada": 25, "parcelamento": 2},
        ("0 a 1000", "já atrasou mais de 15 dias"): {"entrada": 30, "parcelamento": 2},
        ("1000 a 2500", "Nunca atrasou"): {"entrada": 10, "parcelamento": 5},
        ("1000 a 2500", "até 5 dias"): {"entrada": 15, "parcelamento": 4},
        ("1000 a 2500", "até 10 dias"): {"entrada": 20, "parcelamento": 3},
        ("1000 a 2500", "até 15 dias"): {"entrada": 25, "parcelamento": 3},
        ("1000 a 2500", "já atrasou mais de 15 dias"): {"entrada": 30, "parcelamento": 3},
        ("2500 a 5000", "Nunca atrasou"): {"entrada": 10, "parcelamento": 6},
        ("2500 a 5000", "até 5 dias"): {"entrada": 15, "parcelamento": 5},
        ("2500 a 5000", "até 10 dias"): {"entrada": 20, "parcelamento": 4},
        ("2500 a 5000", "até 15 dias"): {"entrada": 25, "parcelamento": 4},
        ("2500 a 5000", "já atrasou mais de 15 dias"): {"entrada": 30, "parcelamento": 4},
        ("5000+", "Nunca atrasou"): {"entrada": 15, "parcelamento": 10},
        ("5000+", "até 5 dias"): {"entrada": 20, "parcelamento": 8},
        ("5000+", "até 10 dias"): {"entrada": 25, "parcelamento": 7},
        ("5000+", "até 15 dias"): {"entrada": 30, "parcelamento": 6},
        ("5000+", "já atrasou mais de 15 dias"): {"entrada": 30, "parcelamento": 6},
    }

    value_range = get_value_range(installment_value)
    profile = get_debtor_profile(late_payment_days)

    return agreement_mapping.get((value_range, profile))
