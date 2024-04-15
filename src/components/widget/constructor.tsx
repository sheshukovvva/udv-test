export default function WidgetConstructor(): JSX.Element {
  return(
    <div className="widget edit">
      <div className="top">
        <div className="title-widget">Выберите тип виджета</div>
        <div className="icon hover">
          <i className="icon-S icon-Close" />
        </div>
      </div>
      <div className="constructor">
        <div className="widget-type">
          <div className="icon">
            <i className="icon-M icon-Sunny" />
          </div>
          <div className="widget-name">Погода</div>
        </div>
        <div className="widget-type">
          <div className="icon">
            <i className="icon-M icon-Add_Plus" />
          </div>
          <div className="widget-name">Другое</div>
        </div>
      </div>
    </div>
  )
}