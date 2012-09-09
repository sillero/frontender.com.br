{% if post.author %}
	{% assign author_name = post.author %}
{% else %}
	{% assign author_name = 'sillero' %}
{% endif %}

{% if post.author_url %}
	{% assign author_url = post.author_url %}
{% else %}
	{% assign author_url = 'http://github.com/' | append: author_name %}
{% endif %}

({{ author_name }})[{{ author_url }}]

