from django.shortcuts import HttpResponseRedirect
from django.urls import reverse


def home(request):
    return HttpResponseRedirect(reverse('example_vue_app'))
