# Generated by Django 5.0 on 2023-12-18 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('build', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='staffs',
            old_name='firstName',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='staffs',
            name='middleName',
        ),
        migrations.RemoveField(
            model_name='staffs',
            name='suname',
        ),
    ]
