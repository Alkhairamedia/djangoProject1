# Generated by Django 5.0 on 2024-01-13 09:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('build', '0013_students_class_teacher_alter_attendance_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='students',
            name='class_teacher',
        ),
    ]
