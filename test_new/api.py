from __future__ import unicode_literals
import frappe
from frappe.auth import LoginManager
from frappe import _
import time
import json

def set_employee_form_name(doc, method):
    doc.custom_form_name  = doc.name

def workspace_onload(doc, method):
    # Custom logic to execute when the Workspace document is loaded
    frappe.msgprint(f"Workspace document {doc.name} has been loaded")
    
#testing
#def on_user_login(login_manager):
#    user = login_manager.user
#    user_language = frappe.db.get_value("User", user, "language")
#    frappe.msgprint(f"Welcome to ERPNext, {user}! Your language preference is {user_language}.")
#    if "System Manager" in frappe.get_roles(user):
#        frappe.msgprint("You are a System Manager!")
#    if user_language == 'de':
#        frappe.msgprint("Guten Tag! Willkommen zurück!")
#    else:
#        frappe.msgprint("Hello! Welcome back!")

#testing
#def on_user_login222(login_manager):
#    user = login_manager.user
#    user_language = frappe.db.get_value("User", user, "language")
#    print("User Language: ", user_language)
#    get_translated_data = frappe.db.sql("""SELECT name, language, source_text, translated_text FROM `tabTranslation` WHERE language = %s """, (user_language), as_dict=1)
#    print("Fetched Translation Data: ", get_translated_data)
#    if user_language == 'de':
#        if get_translated_data:
#            for translation in get_translated_data:
#                frappe.msgprint(f"{translation['translated_text']}")
#    if user_language == 'en':
#        if get_translated_data:
#            for translation in get_translated_data:
#                frappe.msgprint(f"{translation['source_text']}")

def workspace_onload(login_manager):
    user = login_manager.user
    #user_language = frappe.db.get_value("User", user, "language")
    print("user",user)

@frappe.whitelist(allow_guest=True)
def save_portal_user_data(data):
    print("datacvz",data)
    try:
        doc = frappe.get_doc({
            'doctype': 'Portal User Data',
            'name1': data.get('name'),
            'email': data.get('email'),
            'address': data.get('address'),
            'mobile_number': data.get('mobile_number')
        })
        doc.insert(ignore_permissions=True)
        return 'success'
    except Exception as e:
        frappe.log_error(f"Error: {str(e)}", "Portal User Data Error")
        return 'error'
