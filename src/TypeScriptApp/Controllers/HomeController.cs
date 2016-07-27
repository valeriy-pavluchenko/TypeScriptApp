using Microsoft.AspNetCore.Mvc;

namespace TypeScriptApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Game()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
