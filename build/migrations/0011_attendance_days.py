# Generated by Django 5.0 on 2023-12-28 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('build', '0010_alter_parents_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='days',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
