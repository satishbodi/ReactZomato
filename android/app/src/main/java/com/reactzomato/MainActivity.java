package com.reactzomato;

import android.graphics.Color;
import android.util.TypedValue;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    /*@Override
    protected String getMainComponentName() {
        return "ReactZomato";
    }*/

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        TextView textView = new TextView(this);

        view.setBackgroundColor(Color.RED);
        view.setGravity(Gravity.CENTER);

        textView.setTextColor(Color.parseColor("#FFFFFF"));
        textView.setText("Zomato");
        textView.setGravity(Gravity.CENTER);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 60);

        view.addView(textView);
        return view;
    }
}
