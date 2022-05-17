using System.Collections.Generic;
using MarketB2B.Data;
using MarketB2B.Models;

namespace MarketB2B.Services.Implementation
{
    public class DataService : IDataService
    {
        public DataContext _context;
        public DataService(DataContext dc)
        {
            _context = dc;
        }
        
        public List<Item> GetItems()
        {
            throw new System.NotImplementedException();
        }
    }
}