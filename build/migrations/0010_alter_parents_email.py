# Generated by Django 5.0 on 2023-12-27 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('build', '0009_alter_students_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parents',
            name='email',
            field=models.EmailField(max_length=200, null=True),
        ),
    ]