frappe.pages['check-translation'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Translation',
		single_column: true
	});
	var myDiv = $(".layout-main");
	var paragraph = document.createElement("p");
	paragraph.textContent = (__("This is my custom HTML block."))
	myDiv.append(paragraph);
}
