# Контентные блоки

Контентные блоки задают содержимое страницы и состоят из базовых блоков.

Если необходимо, контентные блоки могут содержать собственные уникальные или косметические стили. Значения свойств в стилях всех визуальных сущностей должны браться из модоификаторов темы (цвет, размер, регистр).

## Блоки, которые нужно собрать

#### .payment — блок платёжной формы

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/payment.png)

Из уровня дизайн-сиcтемы должны использоваться:

- cтили блока-паттерна `.form`;
- стили контентного блока `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

##### Исходные стили

- размер границ — 3px

#### .warning — блок предупреждения

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/warning.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.informer`;
- стили контентных блоков `.text`, `placeholder`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- минимальная высота — 335px;
- размер внешних вертикальных отступов вложенного блока placeholder — `m`.

#### .product — блок карточки товара

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/product.png)

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/product2.png)(в инвёрсной Теме)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`;
- стили контентного блока `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- минимальная высота — 280px;
- размер границ — 3px;
- высота изображения — 160px.

#### .history — блок истории операций

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/history.png)

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/history2.png)(в раскрытом виде)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-Паттерна `.list`;
- стили контентных блоков `.text`, `brand-logo`.

Ещё блок должен содержать свои уникальные дополнительные стили и логику раскрытия.

##### Исходные стили

- размер границ — 3px

#### .commercial — блок рекламной вставки

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/commercial.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`;
- стили контентного блока `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- минимальная высота — 430px;
- размер границ — 3px;
- точки навигации имеют размер 8px на 8px;
- отстпупы между собой в значении `xs`;
- высота изображения — 180px;
- отступ между текстом и навигацией — `s`.

#### .cover — блок обложки товара

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/cover.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`;
- стили контентного блока `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- минимальная высота — 408px;
- отступ между изображение и текстом в значении`m`;
- высота изображения — 180px;
- высота кнопки — `l`.

#### .collect — блок сбора средств

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/collect.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`;
- стили контентного блока `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

##### Исходные стили

- размер границ — 3px;
- элемент прогресc-бара имеет высоту 8px и нижнюю границу;
- высота изображения — 160px;
- минимальная высота — 380px;
- отступ между строкой заголовка и текстом — s.

#### .articles — блок публикации

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/articles.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.icon-plus`;
- стили контентного блока `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- размеры изображения — 170px x 120px;
- вертикальный отступ перед ссылкой (последняя строка) — xs.

#### .offer — блок скидочного предложения

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/offer.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.icon-plus`;
- стили контентных блоков`.text`, `brand-logo`.

Ещё блок должен содержать свои уникальные дополнительные стили.

##### Исходные стили

- минимальная высота — 408px;
- у первой и второй строк блока внешний отступ снизу имеет значение xs.

#### .subscription — блок подписки

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/subscribtion.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блоков-паттернов `.card`, `.list`;
- стили контентных блоков `.text`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- минимальная высота — 408px;
- отступ между блоками input и button в футере — `s`;
- у первой строки внешний отступ снизу — xl;
- у второй и последующих строк внешний отступ снизу — s.

#### .event — блок мероприятия

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/event.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`;
- стили контентных блоков `.text`, `avatar`, `brand-logo`.

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- минимальная высота — 333px;
- величина отступа между логотипами и первой строкой равна значению `xl`;
- величина отступа между заголовком и текстом — `s`.

#### .header — сквозной блок шапки

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/header.png)

Блок должен содержать свои уникальные стили

##### Исходные стили

- имеет вертикальные отступы в значении `xxxl` вертикальный и `--gap` горизонтальный;
- к краю экрана не прилипает;
- логотип имеет фиксированную ширину 179px, высоту 34px и цвет, соответствующий цвету основного текста.

#### .onoswitch — сквозной блок переключателя тем

Должен содержать свои уникальные стили и логику переключения тем (располагается внутри шапки).

**Исходные стили**

- имеет фиксированную ширину 97px и высоту 32px;
- сам ползунок имеет фиксированную ширину 24px и высоту 24px;
- цвет фона ползунка соответствует цвету границ;
- ширина границы — 2px.

#### .footer — сквозной блок подвала

[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/screenshots/footer.png)

Из уровня дизайн-сиcтемы блок использует стили контентного блока `.text`

Ещё блок должен содержать свои уникальные дополнительные стили.

**Исходные стили**

- имеет вертикальные отступы в значении `xxxl` вертикальный и `--gap` горизонтальный;
- к краю экрана не прилипает;
- максимальная ширина контента — 1144px.

### Помощь: подробная спецификация блоков с подсказками, на каком узле и в какой модификации используется блок паттерна или его элементы.

### Смысловой блок: payment

**Примиксованные блоки паттернов**

- payment (form_border_all)
- payment**header (form**item_space-v_l form**item_space-h_xl form**item_border_bottom)
- payment**content (form**item_space-v_xxxl form**item_space-h_xl form**item_border_bottom)
- payment**footer (form**item_distribute_between form**item_border_bottom form**item_vertical-align_center form**item_space-v_l form**item_space-h_xl)
- form**item (form**item_indent-b_xl form**item_distribute_between form**item_vertical-align_center)
- form**label (form**label_width_default)

**Вложенные контентные блоки**

- text text_view_primary text_size_l, text_size_xxl (для заголовка формы)
- button

### Смысловой блок: warning

**Примиксованные блоки паттернов**

- warning (informer_view_default informer_border_all)
- warning**content (informer**content_distribute_center informer\_\_content_space-a_xxl)
- warning**button-wrapper (informer**action_distribute_center informer\_\_action_space-a_xl)

**Вложенные контентные блоки**

- text text_view_primary text_size_xl
- placeholder placeholder_view_primary placeholder_size_m

### Смысловой блок: product

**Примиксованные блоки паттернов**

- product (card_view_default card_border_all)
- product**content (card**content card\_\_content_space-a_m)
- product**footer (card**footer card\_\_footer_space-a_m)

**Вложенные контентные блоки**

- text text_view_primary text_size_m
- text text_view_primary text_size_s

### Смысловой блок: history

**Примиксованные блоки Паттернов**

- history (list_view_default list_border_all)
- history**transaction (list**item_border_bottom list\_\_item_space-a_l)[пункт истории]
- history**show (e-accordion**short list**item_vertical-align_center list**item_indent-t_m)[контейнер для видимой части строки]
- history**hide (e-accordion**more e-accordion**more_view_default list**item list\_\_item_indent-t_m)[контейнер для раскрывающейся части строки]
- history\_\_details [объединяет блок времени, логотипа и текста]
- history\_\_tiem [блок времени (серые полосы слева)]
- history\_\_destination (icon-plus icon-plus_vertical-align_center)[объединяющий блок логотипа и текста]
- history**pic (icon-plus**icon icon-plus**icon_indent-r_s icon-plus**icon_indent-l_l)[контейнер для логотипа]
- history**label (icon-plus**block)[контейнер для текста]
- history**description (list**item_indent-b_m)[две строки текста в расхлопе]
- history**actions (list**item_distribute_between list\_\_item_indent-b_l)[нижняаяя строка в расхлопнутом элементе с двумя блоками]

**Вложенные контентные блоки**

- brand-logo brand-logo_name_yota brand-logo_size_m
- brand-logo brand-logo_name_kcell brand-logo_size_m
- brand-logo brand-logo_name_megafon brand-logo_size_m
- brand-logo brand-logo_name_mts brand-logo_size_m
- text text_view_primary text_size_l
- text text_view_ghost text_size_s

### Смысловой блок: commercial

**Примиксованные блоки паттернов**

- commercial (card_view_default theme theme_color_project-brand)
- commercial**pic (card**content_space-a_xxl)
- commercial**info (card**footer_space-a_xxl)

**Вложенные контентные блоки**

- text text_view_primary text_size_s

### Смысловой блок: cover

**Примиксованные блоки паттернов**

- cover (card card_view_default theme theme_color_project-brand)
- cover**info (card**content_space-a_xxl)
- cover\_\_preview (theme_color_project-brand)
- cover**footer (card**footer_space-a_xxl)

**Вложенные контентные блоки**

- text text_view_primary text_size_xxl

### Смысловой блок: collect

**Примиксованные блоки паттернов**

- collect (card_view_default card_border_all theme theme_color_project-inverse)
- collect**image (card**content)
- collect**footer (card**footer card\_\_footer_space-a_l)

**Вложенные контентные блоки**

- text text_size_l text_view_primary
- text text_size_m text_view_secondary

### Смысловой блок: articles

**Примиксованные блоки паттернов**

- articles (list_view_default)
- articles**article (list**item_indent-b_xl)
- articles\_\_unit (icon-plus icon-plus_vertical-align_center)
- articles**pic (theme_color_project-inverse icon-plus**icon icon-plus\_\_icon_indent-r_m)
- articles**content (icon-plus**block)

**Вложенные контентные блоки**

- text text_view_secondary text_size_l
- text text_view_primary text_size_l
- text text_view_link text_size_m

### Смысловой блок: offer

**Примиксованные блоки паттернов**

- offer (theme_color_megafon-brand card card_view_default)
- offer**partner (card**content_space-a_xl)
- offer**footer (card**footer_space-a_xl)
- brand-logo brand-logo_name_megafon brand-logo_size_m

**Вложенные контентные блоки**

- text text_view_ghost text_size_s
- text text_view_primary text_size_xxl
- text text_view_secondary text_size_m

### Смысловой блок: subscription

**Примиксованные блоки паттернов**

- subscribtion (card_view_default theme theme_color_project-brand)
- subscribtion**info (card**content_space-a_xl)
- subscribtion**footer (card**footer_space-a_xl)
- subscribtion**control (list**item_space-b_s)

**Вложенные контентные блоки**

- text text_view_primary text_size_xxl
- text text_view_primary text_size_l

### Смысловой блок: event

**Примиксованные блоки паттернов**

- event (card_view_default theme_color_project-inverse)
- event**content (card**content_vertical-align_center card**content_distribute_center card**content_space-a_xxl)
- event**footer (card**footer_vertical-align_center card**footer_distribute_center card**footer_space-a_xxl)

**Вложенные контентные блоки**

- avatar avatar_size_m
- brand-logo brand-logo_name_mts/brand-logo_name_mts brand-logo_size_m
- text text_view_primary text_size_xxl text_align_center
- text text_view_primary text_size_l text_align_center
- text text_view_link text_size_xl text_align_center

### Смысловой блок: product

**Примиксованные блоки паттернов**

- product (card_view_default card_border_all)
- product**content (card**content_space-a_m)
- product**footer (card**footer_space-a_m)

**Вложенные контентные блоки**

- text text_view_primary text_size_m
- text text_view_primary text_size_s

### Сквозной блок: header

- Содержит в себе переключатель темы.

### Сквозной блок: onoffswitch

- Вкладывается в шапку.

### Сквозной блок: footer

**Вложенные контентные блоки**

- text text_view_primary text_size_l
