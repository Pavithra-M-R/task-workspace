from __future__ import unicode_literals
import frappe

def set_employee_form_name(doc, method):
    doc.custom_form_name  = doc.name