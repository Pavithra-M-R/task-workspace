# Copyright (c) 2024, pavithra and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class C(Document):
	pass

@frappe.whitelist()
def get_details_a(user):
    # Fetch records from Doctype A where the user matches
    a_records = frappe.get_all('A-', filters={'user': user}, fields=['*'])
    print("A Records:", a_records)
    return a_records

@frappe.whitelist()
def get_details_b(user):
    # Fetch records from Doctype B where the user matches
    b_records = frappe.get_all('B-', filters={'user': user}, fields=['*'])
    print("B Records:", b_records)
    return b_records
