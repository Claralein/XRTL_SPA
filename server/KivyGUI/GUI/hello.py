from asyncio import constants
from cgitb import text
import kivy;
from kivy.app import App
from kivy.uix.widget import Widget
from kivy.core.window import Window
from kivy.graphics import Rectangle, Color
from kivy.lang import Builder
from kivymd.app import MDApp
from kivymd.uix.list import OneLineIconListItem
from kivymd.icon_definitions import md_icons




class MainApp(MDApp):
        def build(self):
                Window.clearcolor = (0, 0, 0, 0.6)
                Window.size = (1824, 984)
                self.theme_cls.theme_style ="Dark"             #dark is better but the Button is then invisible
                self.theme_cls.primary_palette = "Green"
                self.theme_cls.accent_palette = "Gray"
                return Builder.load_file('server.kv')
        
        #Changes the color of the wifi icons, when the switch has been clicked
        def switchPress(self, switchObject, switchValue):
                if switchValue == True:
                        self.root.ids.wifi1.color= (1,1,0,1)
                        self.root.ids.wifi2.color= (1,1,0,1)
                else:
                        self.root.ids.wifi1.color= (1,1,1,0.6)
                        self.root.ids.wifi2.color= (1,1,1,0.6)

MainApp().run()
#1824x984 Auflösung des Raspberry Pis