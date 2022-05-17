using System.ComponentModel.DataAnnotations;

namespace MarketB2B.Models
{
    public class Tag
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public string TagName { get; set; }
        [Required]
        public string TagDescription { get; set; }

    }
}