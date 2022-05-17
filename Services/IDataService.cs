using System.Collections.Generic;
using MarketB2B.Models;

namespace MarketB2B.Services
{
    public interface IDataService
    {
        List<Item> GetItems();
    }
}