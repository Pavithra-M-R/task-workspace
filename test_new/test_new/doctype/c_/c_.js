// Copyright (c) 2024, pavithra and contributors
// For license information, please see license.txt

// frappe.ui.form.on("C-", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('C-', {
    add_details: function(frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var user = d.user;

        // Fetch details from Doctype A
        var fetch_a_user_details = fetch_a_user_data(user);
        console.log("fetch_a_user_details", fetch_a_user_details);

        // Add all records from Doctype A to the child table
        for (var j = 0; j < fetch_a_user_details.length; j++) {
             var a_name = fetch_a_user_details[j].name;
            var a_user = fetch_a_user_details[j].user;
            var custom_city = fetch_a_user_details[j].city;
            var custom_contact = fetch_a_user_details[j].contact;
            var custom_country = fetch_a_user_details[j].country;

            var child_row_a = cur_frm.add_child("user_details_tablea");
             frappe.model.set_value(child_row_a.doctype, child_row_a.name, "name1", a_name);
            frappe.model.set_value(child_row_a.doctype, child_row_a.name, "user", a_user);
            frappe.model.set_value(child_row_a.doctype, child_row_a.name, "city", custom_city);
            frappe.model.set_value(child_row_a.doctype, child_row_a.name, "contact", custom_contact);
            frappe.model.set_value(child_row_a.doctype, child_row_a.name, "country", custom_country);
        }
        cur_frm.refresh_field("user_details_tablea");

        // Fetch details from Doctype B
        var fetch_b_user_details = fetch_b_user_data(user);
        console.log("fetch_b_user_details", fetch_b_user_details);

        // Add all records from Doctype B to the child table
        for (var k = 0; k < fetch_b_user_details.length; k++) {
            var b_name= fetch_b_user_details[k].name;
            var b_user = fetch_b_user_details[k].user;
            var custom_city_b = fetch_b_user_details[k].custom_city;
            var custom_contact_b = fetch_b_user_details[k].custom_contact;
            var custom_country_b = fetch_b_user_details[k].custom_country;

            var child_row_b = cur_frm.add_child("user_details_tableb");
            frappe.model.set_value(child_row_b.doctype, child_row_b.name, "name1", b_name);
            frappe.model.set_value(child_row_b.doctype, child_row_b.name, "user", b_user);
            frappe.model.set_value(child_row_b.doctype, child_row_b.name, "city", custom_city_b);
            frappe.model.set_value(child_row_b.doctype, child_row_b.name, "contact", custom_contact_b);
            frappe.model.set_value(child_row_b.doctype, child_row_b.name, "country", custom_country_b);
        }
        cur_frm.refresh_field("user_details_tableb");
    }
});

// Function to fetch data for Doctype A
function fetch_a_user_data(user) {
    var data = "";
    frappe.call({
        method: "test_new.test_new.doctype.c_.c_.get_details_a",
        args: {
            "user": user
        },
        async: false,
        callback: function(r) {
            if (r.message) {
                data = r.message;
            }
        }
    });
    return data;
}

// Function to fetch data for Doctype B
function fetch_b_user_data(user) {
    var data = "";
    frappe.call({
        method: "test_new.test_new.doctype.c_.c_.get_details_b",
        args: {
            "user": user
        },
        async: false,
        callback: function(r) {
            if (r.message) {
                data = r.message;
            }
        }
    });
    return data;
}

