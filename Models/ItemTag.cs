using System.ComponentModel.DataAnnotations;
using System.Runtime.Versioning;
using NJsonSchema.Annotations;
using YamlDotNet.Core.Tokens;

namespace MarketB2B.Models
{
    public class ItemTag
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public Item Item { get; set; }
        [Required]
        public Tag Tag { get; set; }
        public string Value { get; set; }
    }
}