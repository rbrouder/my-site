from functools import partialmethod
import daft

class dag(daft.PGM):
    def __init__(self, *args, **kwargs):
        daft.PGM.__init__(self, *args, **kwargs)

    latNode = partialmethod(daft.PGM.add_node, scale=1.3, aspect=2.4,
                            fontsize=10, plot_params={"facecolor": "aliceblue"})
    detNode = partialmethod(daft.PGM.add_node, aspect=5.4, fontsize=9.25,
                            alternate=True, plot_params={"facecolor": "aliceblue"})

pgm = dag(dpi=150, alternate_style="outer")
pgm.latNode("sunny", "Sunny Day\n" + r"$X \sim Bernoulli(0.6)$", 1, 2.2, scale=1.5, aspect=3)
pgm.latNode("high", "High Sales Day\n" + r"$Y \sim Bernoulli(\theta_X)$", 1, 1, scale=1.5, aspect=3)
pgm.add_edge("sunny", "high")
pgm.show()

pgm = dag(dpi=150, alternate_style="outer")
pgm.latNode("acid", "Acid", 1, 3.4, scale=1.4, aspect=2.6)
pgm.latNode("bacteria", "Bacteria in Food", 2.1, 2.2, scale=1.4, aspect=3.4)
pgm.latNode("scurvy", "Scurvy", 3.2, 1, scale=1.4, aspect=2.6)
pgm.add_edge("acid", "bacteria")
pgm.add_edge("bacteria", "scurvy")
pgm.show()