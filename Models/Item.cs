using System.ComponentModel.DataAnnotations;

namespace MarketB2B.Models
{
    public class Item
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }
        [Required]
        public Company Seller { get; set; }
    }
}