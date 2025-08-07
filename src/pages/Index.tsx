import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-xl font-bold text-primary">РемонтПро</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Получить консультацию</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit">Капитальный ремонт под ключ</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Ремонт квартир<br />
                <span className="text-primary">под ключ</span><br />
                в Вологде
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Профессиональный капитальный ремонт с полной перепланировкой. 
                Гарантия качества, фиксированные цены, соблюдение сроков.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <img 
                  src="/img/69a122aa-c9c0-468e-b828-61c9922d3192.jpg" 
                  alt="Современная кухня после ремонта"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по капитальному ремонту и перепланировке квартир
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Hammer",
                title: "Демонтажные работы",
                description: "Снос стен, демонтаж старых покрытий, подготовка к перепланировке"
              },
              {
                icon: "Wrench",
                title: "Электромонтаж",
                description: "Полная замена проводки, установка розеток, выключателей, освещения"
              },
              {
                icon: "Droplets",
                title: "Сантехнические работы",
                description: "Замена труб, установка сантехники, теплый пол"
              },
              {
                icon: "Paintbrush",
                title: "Отделочные работы",
                description: "Штукатурка, покраска, поклейка обоев, укладка плитки"
              },
              {
                icon: "Layers",
                title: "Напольные покрытия",
                description: "Укладка ламината, паркета, керамогранита, линолеума"
              },
              {
                icon: "Home",
                title: "Перепланировка",
                description: "Изменение планировки с согласованием в БТИ"
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных проектов капитального ремонта в Вологде
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/69a122aa-c9c0-468e-b828-61c9922d3192.jpg",
                title: "Кухня в стиле минимализм",
                area: "15 м²",
                duration: "3 недели"
              },
              {
                image: "/img/c6250f5a-be15-4007-87f3-14b330ae8fae.jpg",
                title: "Современная ванная комната",
                area: "8 м²",
                duration: "2 недели"
              },
              {
                image: "/img/713e10c2-32d3-4c85-8415-b5ebf27dcba2.jpg",
                title: "Гостиная с перепланировкой",
                area: "25 м²",
                duration: "4 недели"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Square" size={16} className="mr-1" />
                      {project.area}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {project.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Прозрачные цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фиксированная стоимость без скрытых доплат
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый ремонт",
                price: "от 15 000 ₽/м²",
                features: [
                  "Демонтажные работы",
                  "Замена электрики",
                  "Базовая сантехника",
                  "Простая отделка",
                  "Напольное покрытие"
                ]
              },
              {
                title: "Комплексный ремонт",
                price: "от 25 000 ₽/м²",
                features: [
                  "Всё из базового пакета",
                  "Перепланировка",
                  "Дизайн-проект",
                  "Премиум материалы",
                  "Встроенная мебель",
                  "Гарантия 3 года"
                ],
                popular: true
              },
              {
                title: "VIP ремонт",
                price: "от 40 000 ₽/м²",
                features: [
                  "Всё из комплексного",
                  "Эксклюзивный дизайн",
                  "Умный дом",
                  "Элитные материалы",
                  "Мебель на заказ",
                  "Консьерж-сервис"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">О компании</h2>
              <p className="text-lg text-muted-foreground">
                Более 10 лет профессионально занимаемся капитальным ремонтом квартир в Вологде. 
                Наша команда — это опытные мастера, которые знают все тонкости ремонтных работ.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Завершенных проектов" },
                  { number: "10", label: "Лет опыта" },
                  { number: "100%", label: "Довольных клиентов" },
                  { number: "3", label: "Года гарантии" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Icon name="Award" size={64} className="text-primary mx-auto" />
                    <h3 className="text-2xl font-bold">Качество гарантируем</h3>
                    <p className="text-muted-foreground">Все работы выполняются согласно ГОСТ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для бесплатной консультации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                info: "+7 (8172) 123-456",
                action: "Позвонить"
              },
              {
                icon: "Mail",
                title: "Email",
                info: "info@remontpro35.ru",
                action: "Написать"
              },
              {
                icon: "MapPin",
                title: "Адрес",
                info: "г. Вологда, ул. Мира, 15",
                action: "Маршрут"
              },
              {
                icon: "Clock",
                title: "Режим работы",
                info: "Пн-Пт: 9:00-18:00",
                action: "График"
              }
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon name={contact.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{contact.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{contact.info}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Готовы начать ваш проект?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости ремонта уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-base border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Home" size={24} className="text-primary" />
                <span className="text-xl font-bold text-primary">РемонтПро</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональный ремонт квартир под ключ в Вологде
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Капитальный ремонт</li>
                <li>Перепланировка</li>
                <li>Дизайн проекты</li>
                <li>Отделочные работы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (8172) 123-456</li>
                <li>info@remontpro35.ru</li>
                <li>г. Вологда, ул. Мира, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}