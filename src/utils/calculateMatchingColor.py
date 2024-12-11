# Function to calculate matching color `c`, such that the color `a` on background color `b` remains same when applying opacity `alpha`

class Color:
    def __init__(self, r,g,b):
        self.r = r
        self.g = g
        self.b = b

def calculateColor(foreground: Color, background: Color, alpha):
    r = formula(foreground.r, background.r, alpha)
    g = formula(foreground.g, background.g, alpha)
    b = formula(foreground.b, background.b, alpha)
    return Color(r,g,b)

def calculateColor2(foreground: Color, background: Color, alpha):
    r = formula2(foreground.r, background.r, alpha)
    g = formula2(foreground.g, background.g, alpha)
    b = formula2(foreground.b, background.b, alpha)
    return Color(r,g,b)


def formula(a, b, o):
    return b + (a - b) * o

def formula2(r3, r2, a1):
    return (r3 - r2 + r2*a1)/a1

requiredColor = calculateColor2(Color(34,35,47), Color(0,0,0), 0.2)
print(requiredColor.r, requiredColor.g, requiredColor.b)
