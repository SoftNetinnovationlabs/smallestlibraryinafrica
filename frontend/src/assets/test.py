import random

class Superhero:
    def __init__(self):
        superFirstNames = ['Wonder', 'Whatt', 'Rabid', 'Incredible']
        superLastNames = ['Ochieng', 'Omondi']
        superPowers = ['Flying', 'Super Strength', 'Telepathy', 'Super Speed']

        self.superName = random.choice(superFirstNames) + " " + random.choice(superLastNames)
        self.power = random.choice(superPowers)
        self.braun = random.randint(1, 20)
        self.brains = random.randint(1, 20)
        self.stamina = random.randint(1, 20)
        self.wisdom = random.randint(1, 20)
        self.constitution = random.randint(1, 20)
        self.dexterity = random.randint(1, 20)
        self.speed = random.randint(1, 20)

# Create and display superhero
hero = Superhero()
print("Your Name is %s." % hero.superName)
print("Power: %s" % hero.power)
print(f"Stats - Braun: {hero.braun}, Brains: {hero.brains}, Stamina: {hero.stamina}, Wisdom: {hero.wisdom}, Constitution: {hero.constitution}, Dexterity: {hero.dexterity}, Speed: {hero.speed}")