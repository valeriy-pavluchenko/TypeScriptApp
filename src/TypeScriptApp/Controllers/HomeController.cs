using Microsoft.AspNetCore.Mvc;

namespace TypeScriptApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
