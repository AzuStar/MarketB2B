namespace MarketB2B.Models
{
    public interface IAuthUser
    {
        string Status   { get; }
        string Token    { get; }
        string UserName { get; }
    }
}