using System;
using System.Linq;
using MarketB2B.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections.Immutable;
using MarketB2B.Config;
using Microsoft.Extensions.Options;
using MarketB2B.Data;
using MarketB2B.Services.Implementation;
using MarketB2B.Services;

namespace MarketB2B.Controllers
{
    [ApiController]
    [Route("api/v1/tests")]
    public class SampleDataController : ControllerBase
    {
        public IDataService _dataService;
        public SampleDataController(IDataService ds){
            _dataService = ds;
        }

        [HttpGet("matched-items")]
        public List<Item> GetMatchedItems()
        {
            return _dataService.GetItems();
        }
    }
}