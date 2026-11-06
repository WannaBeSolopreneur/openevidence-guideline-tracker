select goal_id, status
from {{ ref('mart_goal_status') }}
where status <> case
    when direction = 'lower' and current_value is null then 'behind'
    when direction = 'lower'
        and current_value <= target_value / on_track_ratio
        then 'on_track'
    when direction = 'lower'
        and current_value <= target_value / at_risk_ratio
        then 'at_risk'
    when direction = 'lower' then 'behind'
    when metric_kind = 'pace'
        and current_value >= target_value * days_elapsed * 1.0 / days_in_period * on_track_ratio
        then 'on_track'
    when metric_kind = 'pace'
        and current_value >= target_value * days_elapsed * 1.0 / days_in_period * at_risk_ratio
        then 'at_risk'
    when metric_kind = 'pace' then 'behind'
    when current_value >= target_value * on_track_ratio then 'on_track'
    when current_value >= target_value * at_risk_ratio then 'at_risk'
    else 'behind'
end
