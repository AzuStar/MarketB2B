using MarketB2B.Models;
using Microsoft.EntityFrameworkCore;

namespace MarketB2B.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<ItemTag> ItemTags { get; set; }

        public DbSet<User> Users { get; set; }
    }
}