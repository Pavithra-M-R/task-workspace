frappe.ui.form.on('Workspace', {
    refresh: function(frm) {
        if (frm.doc.title === "Details") {
            $.ajax({
                url: '/assets/test_new/html/demo.html', // Adjust path if needed
                dataType: 'html',
                success: function(data) {
                    $(frm.fields_dict['custom_html'].wrapper).html(data);
                }
            });
        }
    }
});
