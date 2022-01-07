using Azen.Data;
using Azen.Models;
using Azen.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Azen.Controllers
{
    public class ShopController : Controller
    {
        private readonly AppDbContext _context;

        public ShopController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index(int page = 1, double itemCount = 3)
        {
            VmProduct model = new VmProduct();

            List<Product> products = _context.Products
                                        .Include(cp => cp.ColorToProducts).ThenInclude(pi => pi.ProductImages)
                                        .Include(cp => cp.ColorToProducts).ThenInclude(sc => sc.SizeColorToProducts).ToList();

            model.PageCount = (int)Math.Ceiling(products.Count / itemCount);
            model.Products = products.Skip((page - 1) * (int)itemCount).Take((int)itemCount).ToList();
            model.Page = page;
            model.ItemCount = itemCount;

            return View(model);
        }
    }
}
