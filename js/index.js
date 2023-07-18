(function ($, _) {
  CRM.menubar.removeToggleButton();
  CRM.menubar.position = "below-cms-menu";
  $("body").removeClass("crm-menubar-over-cms-menu");
  $("body").addClass("crm-menubar-below-cms-menu");
})(CRM.$, CRM._);
