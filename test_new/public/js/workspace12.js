frappe.ui.form.on('Desk', {
    onload: function() {
        print("newwwwwwwwwwwwwwwwwwwwwwwwww")
        // Get the current user roles
        frappe.call({
            method: "frappe.client.get",
            args: {
                doctype: "User",
                name: frappe.session.user
            },
            callback: function(response) {
                const roles = response.message.roles;

                // Define which workspaces to hide based on roles
                if (roles.includes('Workspace A User')) {
                    // Hide Workspace B
                    hide_workspace('Workspace B');
                } else if (roles.includes('Workspace B User')) {
                    // Hide Workspace A
                    hide_workspace('Workspace A');
                }
            }
        });
    }
});

function hide_workspace(workspace_name) {
    // Hide workspace by its name
    $(`.workspace-card[data-name="${workspace_name}"]`).hide();
}
