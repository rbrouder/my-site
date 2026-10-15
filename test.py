# path simulation: one row per investor
import numpy as np
rng = np.random.default_rng(seed=0)
n = 100_000
total_a = rng.poisson(22, n) + rng.poisson(32, n)
total_b = rng.poisson(13, n) + rng.poisson(45, n)
(total_b - total_a).mean()