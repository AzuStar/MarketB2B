using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MarketB2B.Models
{
    public class Company
    {
        [Key]
        public long Id { get; set; }

        public string Name { get; set; }
        
        public List<Item> Products { get; set; }

    }
}