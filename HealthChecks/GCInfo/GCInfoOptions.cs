﻿namespace MarketB2B.HealthChecks
{
    public class GCInfoOptions : IGCInfoOptions
    {
        public long Threshold { get; set; } = 1024L * 1024L * 1024L;
    }
}