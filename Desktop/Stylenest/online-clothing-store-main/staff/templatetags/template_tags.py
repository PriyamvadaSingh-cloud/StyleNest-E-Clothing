from django import template
from django.contrib.auth.models import Group
from cart.utils import get_or_set_order_session


register = template.Library()


@register.filter(name='has_group')
def has_group(user, group_name):
    """Return True if the user belongs to a group named `group_name`.

    This version is defensive: if the Group doesn't exist, it returns False
    instead of raising an exception during template rendering.
    """
    if not user or not user.is_authenticated:
        return False
    # check user's group names directly to avoid a Group.DoesNotExist
    return group_name in list(user.groups.values_list('name', flat=True))


@register.filter
def cart_item_count(request):
    order = get_or_set_order_session(request)
    count = order.items.count()
    return count
